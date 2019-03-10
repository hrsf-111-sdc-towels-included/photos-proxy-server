


## Get Photos
#### Test.yml
___

```config:
  target: 'http://localhost:3000'
  http:
    pool: 12
  phases:
    - duration: 60
      arrivalRate: 350
scenarios:
  - flow:
    - get:
        url: "/{{$randomNumber(1, 74000000)}}"
    - get: 
        url: "/pictures/{{$randomNumber(1, 74000000)}}"
```

#### Results

```
Summary report @ 21:38:57(-0800) 2019-03-09
  Scenarios launched:  21001
  Scenarios completed: 21001
  Requests completed:  42002
  RPS sent: 413.94
  Request latency:
    min: 2.1
    max: 15378.8
    median: 5197.1
    p95: 14136.1
    p99: 15190.6
  Scenario counts:
    0: 21001 (100%)
  Codes:
    200: 21001
    404: 21001
```