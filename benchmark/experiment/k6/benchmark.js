import http from 'k6/http'
import exec from 'k6/execution'

var total_target_samples = 3000
var target_samples_per_burst_size = total_target_samples / 4
var inter_burst_pauses = 10
var mode = ''
var count = 0

function range (size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

function k6_options_burst (burst_size) {
  var num_bursts = range(
    Math.ceil(target_samples_per_burst_size / parseInt(burst_size))
  )
  var options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    scenarios: {}
  }

  num_bursts.forEach(burst => {
    options.scenarios[`burst_${burst_size}_${burst + 1}`] = {
      executor: 'per-vu-iterations',
      vus: burst_size,
      iterations: 1,
      startTime: `${inter_burst_pauses * burst}s`
    }
  })

  return options
}

function k6_options_constant (invoke_delay) {
  var options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    scenarios: {}
  }

  for (let i = 0; i < 500; i++) {
    options.scenarios[`inter_${i + 1}`] = {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 1,
      startTime: `${invoke_delay * i}ms`,
      tags: { ITERATIONID: `${i}` }
    }
  }
  return options
}

function k6_options_constant_one_vu (invoke_delay) {
  var options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    scenarios: {
      one_vu: {
        executor: 'constant-arrival-rate',
        maxVUs: 1,
        duration: `${invoke_delay*500}ms`,
        rate: 1,
        timeUnit: `${invoke_delay}ms`,
        preAllocatedVUs: 1
    },
  },
}
  return options
}

if (__ENV.MODE == 'BURST') {
  var options_temp = k6_options_burst(__ENV.BURST_SIZE)
  var mode = "burst"
} else if (__ENV.MODE == 'CONSTANT') {
  var options_temp = k6_options_constant(__ENV.INVOKE_DELAY)
  var mode = "constant"
} else if (__ENV.MODE == 'CONSTANT_ONE_VU') {
  var options_temp = k6_options_constant_one_vu(__ENV.INVOKE_DELAY)
  var mode = "constant_one_vu"
}

export let options = options_temp

export default function () {
  if (__ENV.MODE == 'BURST') {
    exec.vu.tags['ITERATIONID'] = count + 1
    http.get(
      `${__ENV.BENCHMARK_URL}&invokeMode=${mode}&invokeInput=${__ENV.BURST_SIZE}&id=${exec.vu.idInTest}`
    )
  } else if (__ENV.MODE == 'CONSTANT') {
    http.get(
      `${__ENV.BENCHMARK_URL}&invokeMode=${mode}&invokeInput=${__ENV.INVOKE_DELAY}&id=${exec.vu.tags.ITERATIONID}`
    )
  } else if (__ENV.MODE == 'CONSTANT_ONE_VU'){
    http.get(
      `${__ENV.BENCHMARK_URL}&invokeMode=${mode}&invokeInput=${__ENV.INVOKE_DELAY}&id=${exec.scenario.iterationInTest}`
    )
  }
}
