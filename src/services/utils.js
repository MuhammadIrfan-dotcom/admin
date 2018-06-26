export default {
  hex2rgb (hex, opacity) {
    hex = (hex + '').trim()

    let rgb = null
    let match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/)

    if (!match) {
      return null
    }

    rgb = {}

    hex = match[1]

    if (hex.length === 6) {
      rgb.r = parseInt(hex.substring(0, 2), 16)
      rgb.g = parseInt(hex.substring(2, 4), 16)
      rgb.b = parseInt(hex.substring(4, 6), 16)
    } else if (hex.length === 3) {
      rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16)
      rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)
      rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)
    }

    rgb.css = 'rgb' + (opacity ? 'a' : '') + '('
    rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b
    rgb.css += (opacity ? ',' + opacity : '') + ')'

    return rgb
  },

  findInNestedByName (array, name) {
    if (typeof array !== 'undefined') {
      if (array.children) {
        for (let i = 0; i < array.children.length; i++) {
          let tempArray = []
          if (array.children[i].path === name) {
            tempArray.push(array.children[i])
            return tempArray
          }
          let a = this.findInNestedByName(array.children[i].children, name)
          if (a != null) {
            a.unshift(array.children[i])
            return a
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          let tempArray = []
          if (array[i].path === name) {
            tempArray.push(array[i])
            return tempArray
          }
          let a = this.findInNestedByName(array[i].children, name)
          if (a != null) {
            a.unshift(array[i])
            return a
          }
        }
      }
    }
    return null
  }
}
