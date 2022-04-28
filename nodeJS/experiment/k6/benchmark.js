import http from 'k6/http'
import exec from 'k6/execution'

var total_target_samples = 3000
var target_samples_per_burst_size = total_target_samples / 4
var inter_burst_pauses = 10

function range (size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

function k6_options (burst_size) {
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

export let options = k6_options(__ENV.BURST_SIZE)

// 1. init code

export default function () {
  http.get(`${__ENV.BENCHMARK_URL}&id=${exec.scenario.iterationInTest}`)
}
