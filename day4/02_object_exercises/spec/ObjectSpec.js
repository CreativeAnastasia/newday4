describe("Object", function() {

  it("obj should be right", () => {
    expect(obj).toEqual({"cat": "dog"})
  })

  it("should access properties correctly", () => {
    expect(objy.boo).toEqual("moo")
  })

  it("should add properties correctly", () => {
    expect(niceObject.hello).toEqual("hi")
  })

  it("confirm objects don't equal eachother", () => {
    expect(tyf).toEqual(true)
  })

  it("arrays are objects", () => {
    expect(isObject).toEqual(true)
  })


  it("bracket notation to work", () => {
    expect(q).toEqual(true)
  })

  it("dot notation to work", () => {
    expect(z).toEqual(true)
  })

  it("should implement reverseProperties", () => {
    expect(reverseProperties({"a": "b"})).toEqual({"b": "a"})
  })


  it("should implement getCharacterNumbers", () => {
    expect(getCharacterNumbers("aabc")).toEqual({a:2,b:1,c:1})
  })

  it("should access properties correctly", () => {
    expect(rt).toEqual(true)
  })

  it("should access properties correctly", () => {
    expect(vt).toEqual(true)
  })

  it("should access properties correctly", () => {
    expect(gt).toEqual(true)
  })

  it("should access properties correctly", () => {
    expect(kt).toEqual(true)
  })

});
