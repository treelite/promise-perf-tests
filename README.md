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

* [saber-promise](https://github.com/ecomfe/saber-promise) 0.1.2
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
deferred        8   0.0008        -
saber          20   0.0020   150.00
when           20   0.0020   150.00
avow           20   0.0020   150.00
q              61   0.0061   662.50
rsvp           86   0.0086   975.00

==========================================================
Test: promise-reject x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber           7   0.0007        -
avow           33   0.0033   371.43
when           39   0.0039   457.14
q              57   0.0057   714.29
deferred       84   0.0084  1100.00
rsvp           88   0.0088  1157.14

==========================================================
Test: promise-sequence x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
deferred       15   0.0015        -
when           70   0.0070   366.67
saber         112   0.0112   646.67
q             175   0.0175  1066.67
avow          223   0.0223  1386.67
rsvp          354   0.0354  2260.00

==========================================================
Test: defer-create x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber           2   0.0002        -
avow            4   0.0004   100.00
when           17   0.0017   750.00
q              20   0.0020   900.00
rsvp           34   0.0034  1600.00
deferred       42   0.0042  2000.00

==========================================================
Test: defer-fulfill x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
avow           60   0.0060        -
when           62   0.0062     3.33
saber          85   0.0085    41.67
rsvp          183   0.0183   205.00
q             222   0.0222   270.00
deferred      296   0.0296   393.33

==========================================================
Test: defer-reject x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
avow           53   0.0053        -
saber          66   0.0066    24.53
when           75   0.0075    41.51
rsvp          202   0.0202   281.13
q             235   0.0235   343.40
deferred      413   0.0413   679.25

==========================================================
Test: defer-sequence x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
when          115   0.0115        -
saber         155   0.0155    34.78
deferred      167   0.0167    45.22
avow          210   0.0210    82.61
q             276   0.0276   140.00
rsvp          314   0.0314   173.04

==========================================================
Test: map x 10000
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
saber           4   0.0004        -
deferred       21   0.0021   425.00
when          183   0.0183  4475.00

==========================================================
Test: reduce-small x 609
NOTE: in node v0.8.14, deferred.reduce causes a
stack overflow for an array length >= 610
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
when            6   0.0099        -
deferred        6   0.0099        -
saber          14   0.0230   133.33

==========================================================
Test: reduce-large x 10000
NOTE: in node v0.8.14, deferred.reduce causes a
stack overflow for an array length >= 610
----------------------------------------------------------
Name      Time ms   Avg ms   Diff %
deferred       41   0.0041        -
saber          64   0.0064    56.10
when          178   0.0178   334.15
```
