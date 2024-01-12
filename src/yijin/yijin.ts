import { YijinItem, IYijin, YijinOptions, defaultOptions } from './interface'
import data from '@/data/yijin.json'
import { verfiyYaoRange, getBianGua, getCuoGua, getZhongGua, getFuGua, getZaGua } from '@/utils/index'

export class Yijin implements IYijin<YijinItem> {
    // 本卦序号
    private _sequence:number
    // 本卦信息
    public guaInfo: YijinItem
    // 六爻信息
    private six_yao_list: number[]

    /**
     * @class Yijin 输入本卦，获取、操作卦额外信息
     * @param sign 本卦的卦序，或者六爻数组
     */
    constructor(sign: number | number[]) {
        if (Array.isArray(sign)) {
            if (!verfiyYaoRange(sign)) throw new TypeError('sign value is illegal！')

            this.six_yao_list = sign

            const guaInfo = data.find((item) => String(item.gua_yao_list) === sign.join(',').replaceAll('7', '9').replaceAll('8', '6'))
            this.guaInfo = guaInfo
            this._sequence = guaInfo.gua_sequence
            
        } else {
            if (!(Number.isInteger(sign) && sign > 0 && sign < 65)) {
                throw new RangeError('sign value is out of range！')
            }

            this._sequence = sign
            this.guaInfo = data.find((item) => item.gua_sequence === sign)
            this.six_yao_list = this.guaInfo.gua_yao_list || []
        }
    }

    // 获取序号
    get sequence(): number {
        return this._sequence
    }
    // 设置序号
    set sequence(val: string| number) {
        const sequence = Number(val)
        if (!(Number.isInteger(sequence) && sequence > 0 && sequence < 65)) {
            throw new RangeError('sequence value is out of range')
        }

        this._sequence = sequence
        this.guaInfo = data.find((item) => item.gua_sequence === sequence)
    }
    
    /**
     * @function getItemValue 根据属性，动态获取卦信息
     * @param key 卦属性
     * @returns guaInfo 卦信息
     */
    getItemValue<S extends keyof YijinItem>(key: S) : YijinItem[S] {
        return this.guaInfo[key]
    }

    /**
     * @function getCuoGua 获取错卦
     * @param opt {type: 'info' | 'sequence'} 指定获取错卦的卦序，卦信息
     * @returns 
     */
    getCuoGua(opt: YijinOptions = defaultOptions): YijinItem | number {
        console.log(opt)
        return
    }

    /**
     * @function getCuoGua 获取综卦
     * @param opt {type: 'info' | 'sequence'} 指定获取卦的卦序，卦信息
     * @returns 
     */
    getZhongGua(opt: YijinOptions = defaultOptions): YijinItem | number {
        console.log(opt)
        return
    }

    /**
     * @function getCuoGua 获取复卦
     * @param opt {type: 'info' | 'sequence'} 指定获取卦的卦序，卦信息
     * @returns 
     */
    getFuGua(opt: YijinOptions = defaultOptions): YijinItem | number {
        console.log(opt)
        return
    }

    /**
     * @function getCuoGua 获取杂卦
     * @param opt {type: 'info' | 'sequence'} 指定获取卦的卦序，卦信息
     * @returns 
     */
    getZaGua(opt: YijinOptions = defaultOptions): YijinItem | number {
        console.log(opt)
        return
    }
}