export const yaoRange = [6, 7, 8, 9]

/**
 * @function verfiyYaoRange 校验数组是否合法
 * @param value 六爻数组(6,7,8,9), 阴为2，阳为3
 * @returns boolean
 */
export const verfiyYaoRange = (value: number[]): boolean => {
    if(value.length !== 6) return false
    const status = value.some((item) => !yaoRange.includes(item))
    if (status) return false

    return true
}

/**
 * @function getBianGua 获取变卦，六爻信息
 * @param value 六爻数(6,7,8,9), 阴为2，阳为3
 * @returns 对应六爻数组
 */
export const getBianGua = (value: number[]): number[] => {
    const str = value.join(',').replaceAll('6', '7').replaceAll('9', '8').replaceAll('8', '6').replaceAll('7', '9')

    return str.split(',').map(v => +v)
}

/**
 * @function getCuoGua 获取错卦，阴变阳，阳变阴
 * @param value 六爻数(6,7,8,9), 阴为2，阳为3
 * @returns 对应六爻数组
 */
export const getCuoGua = (value: number[]): number[] => {
    const str = value.join(',').replaceAll('7', '9').replaceAll('8', '6').replaceAll('9', '6').replaceAll('6', '9')

    return str.split(',').map(v => +v)
}

/**
 * @function getZhongGua 获取综卦，将爻顺序反转
 * @param value 六爻数(6,7,8,9), 阴为2，阳为3
 * @returns 对应六爻数组
 */
export const getZhongGua = (value: number[]): number[] => {
    const str = value.join(',').replaceAll('7', '9').replaceAll('8', '6')

    return str.split(',').map(v => +v).reverse()
}

/**
 * @function getFuGua 获取复卦，将2，3，4爻做为下卦，3，4，5爻做上卦
 * @param value 六爻数(6,7,8,9), 阴为2，阳为3
 * @returns 对应六爻数组
 */
export const getFuGua = (value: number[]): number[] => {
    const arr = value.join(',').replaceAll('7', '9').replaceAll('8', '6').split(',').map(v => +v)
    
    return [arr[1],arr[2],arr[3],arr[2],arr[3],arr[4]]
}

/**
 * @function getZaGua 获取杂卦，将下卦变为上卦，上卦变为下卦
 * @param value 六爻数(6,7,8,9), 阴为2，阳为3
 * @returns 对应六爻数组
 */
export const getZaGua = (value: number[]): number[] => {
    const arr = value.join(',').replaceAll('7', '9').replaceAll('8', '6').split(',').map(v => +v)

    return [arr[3],arr[4],arr[5],arr[0],arr[1],arr[2]]
}