const calculateWorkingDay = require('../index.js')

describe("calculateWorkingDay", () => {
  it("Adds mid-week days correctly", () => {
    let monday = new Date(2016, 11, 5)
    expect(calculateWorkingDay(monday, 3) - new Date(2016, 11, 8)).toEqual(0)
  })

  it("Skips weekends correctly when adding days", () => {
    let monday = new Date(2016, 11, 5)
    expect(calculateWorkingDay(monday, 6) - new Date(2016, 11, 13)).toEqual(0)
  })

  it("Skips weekend days correctly when result falls on a weekend", () => {
    let monday = new Date(2016, 11, 5)
    expect(calculateWorkingDay(monday, 6) - new Date(2016, 11, 13)).toEqual(0)
  })

  it("Skips bank holidays correctly when adding days", () => {
    let friday = new Date(2016, 11, 23)
    expect(calculateWorkingDay(friday, 1) - new Date(2016, 11, 28)).toEqual(0)
  })

  it("Starts counting from the first business day if the starting date is a holiday/wekeend", () => {
    let saturday = new Date(2016, 11, 10)
    expect(calculateWorkingDay(saturday, 1) - new Date(2016, 11, 13)).toEqual(0)
  })
})