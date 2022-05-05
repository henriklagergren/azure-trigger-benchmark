import http from 'k6/http'
import exec from 'k6/execution'

var total_target_samples = 1600
var target_samples_per_burst_size = total_target_samples / 4
var inter_burst_pauses = 10
var mode = ''

function range (size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

function k6_options_burst (burst_size) {
  var num_bursts = range(
    Math.round(target_samples_per_burst_size / parseInt(burst_size))
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

function k6_options_inter (invoke_delay) {
  var options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    scenarios: {}
  }

  for (let i = 0; i < 600; i++) {
    options.scenarios[`inter_${i + 1}`] = {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 1,
      startTime: `${invoke_delay * i}ms`
    }
  }
  return options
}

if (__ENV.INVOKE_DELAY == '0') {
  mode = 'burst'
  var options_temp = k6_options_burst(__ENV.BURST_SIZE)
} else if (__ENV.BURST_SIZE == '0') {
  mode = 'constant'
  var options_temp = k6_options_inter(__ENV.INVOKE_DELAY)
}

export let options = options_temp
// 1. init code

export default function () {
  if (mode == 'burst') {
    http.get(
      `${__ENV.BENCHMARK_URL}&invokeMode=${mode}&invokeInput=${__ENV.BURST_SIZE}&id=${exec.scenario.iterationInTest}`
    )
  } else {
    http.get(
      `${__ENV.BENCHMARK_URL}&invokeMode=${mode}&invokeInput=${__ENV.INVOKE_DELAY}&id=${exec.scenario.iterationInTest}`
    )
  }
}
