https://www.npmjs.com/package/calculate-working-day

## Example usage

```
calculateWorkingDay(new Date(2016, 11, 5), 6)
```
is equivalent to
```
new Date(2016, 11, 13)
```

Days which are skipped:
* all Saturdays and Sundays,
* all England and Wales bank holidays up to the end of 2018.
