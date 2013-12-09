# 关于各Promise实现的基本性能测试

forked from [cujojs/promise-perf-tests](https://github.com/cujojs/promise-perf-tests)

较原版本的区别

* 增加了[saber-promise](https://github.com/ecomfe/saber-promise)测试
* 更新各实现到最新版本，删除了`laissez-faire`（已经不存在了）与 `jQuery Deferred`（意义不大）

## Run

```Shell
$ git clone https://github.com/treelite/promise-perf-tests.git ./
$ cd promise-pref-tests
$ npm install
$ git submodule init
$ git submodule update
$ npm test
```

## Test Environment

MacBook Pro (with Retina), OS X 10.9, 2.4 GHz Intel Core i7, 8 GB 1600 MHz DDR3

* [saber-promise](https://github.com/ecomfe/saber-promise) 0.2.1
* [when](https://github.com/cujojs/when) 2.7.0
* [deferred](https://github.com/medikoo/deferred) 0.6.6
* [Q](https://github.com/kriskowal/q) 0.9.7
* [avow](https://github.com/briancavalier/avow) 2.0.1
* [RSVP](https://github.com/tildeio/rsvp.js) 2.0.4

# Test Results

```text
==========================================================
Test: promise-fulfill x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
when           13   0.0013        -
q              14   0.0014     7.69
saber          15   0.0015    15.38
deferred       30   0.0030   130.77
rsvp           42   0.0042   223.08
avow           66   0.0066   407.69
[Q] Unhandled rejection reasons (should be empty): [ '(no stack) 0' ]

==========================================================
Test: promise-reject x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber          13   0.0013        -
q              20   0.0020    53.85
rsvp           41   0.0041   215.38
when           47   0.0047   261.54
avow           61   0.0061   369.23
deferred       87   0.0087   569.23

==========================================================
Test: promise-sequence x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
deferred       14   0.0014        -
when          108   0.0108   671.43
saber         110   0.0110   685.71
avow          175   0.0175  1150.00
q             220   0.0220  1471.43
rsvp          317   0.0317  2164.29

==========================================================
Test: defer-create x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber           1   0.0001        -
avow            2   0.0002   100.00
q              16   0.0016  1500.00
rsvp           21   0.0021  2000.00
when           29   0.0029  2800.00
deferred       55   0.0055  5400.00

==========================================================
Test: defer-fulfill x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber          48   0.0048        -
avow           62   0.0062    29.17
when           66   0.0066    37.50
rsvp          134   0.0134   179.17
q             215   0.0215   347.92
deferred      323   0.0323   572.92
[Q] Unhandled rejection reasons (should be empty): [ '(no stack) 0' ]

==========================================================
Test: defer-reject x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
avow           35   0.0035        -
saber          64   0.0064    82.86
rsvp          105   0.0105   200.00
when          112   0.0112   220.00
q             257   0.0257   634.29
deferred      374   0.0374   968.57

==========================================================
Test: defer-sequence x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber         117   0.0117        -
when          126   0.0126     7.69
deferred      157   0.0157    34.19
avow          198   0.0198    69.23
q             301   0.0301   157.26
rsvp          329   0.0329   181.20

==========================================================
Test: map x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
deferred       19   0.0019        -
when          159   0.0159   736.84

==========================================================
Test: reduce-small x 609
NOTE: in node v0.8.14, deferred.reduce causes a
stack overflow for an array length >= 610
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
when            6   0.0099        -
deferred        6   0.0099        -

==========================================================
Test: reduce-large x 10000
NOTE: in node v0.8.14, deferred.reduce causes a
stack overflow for an array length >= 610
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
deferred       36   0.0036        -
when          154   0.0154   327.78
```
