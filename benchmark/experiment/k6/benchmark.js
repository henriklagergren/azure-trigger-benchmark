import http from 'k6/http'
import exec from 'k6/execution'

var total_target_samples = 1000
var target_samples_per_burst_size = total_target_samples / 4
var inter_burst_pauses = 10
var burst_sizes = [10, 50, 100, 300]

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

function k6_options_order () {
  var options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    scenarios: {
      out_of_order: {
        executor: 'constant-arrival-rate',
        duration: '30s',
        rate: 10,
        timeUnit: '100ms',
        preAllocatedVUs: 2,
        maxVUs: 20
      }
    }
  }
}
/*
if ((__ENV.BURST_SIZE = 'all')) {
  burst_sizes.forEach(size => {
    export let options = k6_options_burst(size)
  })
}
*/

export let options = k6_options_burst(__ENV.BURST_SIZE)

// 1. init code

export default function () {
  http.get(`${__ENV.BENCHMARK_URL}&id=${exec.scenario.iterationInTest}`)
}
