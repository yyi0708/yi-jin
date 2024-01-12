export type YijinItem = {
    gua_sequence: number
    gua_name: string
    gua_describe: string
    gua_xiang?: string
    gua_ci?: string
    gua_1_yao?: string
    gua_2_yao?: string
    gua_3_yao?: string
    gua_4_yao?: string
    gua_5_yao?: string
    gua_6_yao?: string
    gua_articles: string[]
    gua_yao_list: number[]
}

export type YijinOptions = {
    type?: 'info' | 'sequence'
}

export const defaultOptions: YijinOptions = {
    type: 'info'
}

export interface IYijin<Item> {
    // 卦信息
    guaInfo: Item

    // 卦序
    get sequence(): number
    set sequence(value: number | string)

    // 获取卦相关信息
    getItemValue<S extends keyof Item>(key: S) : Item[S]

    // 获取错卦
    getCuoGua(opt?: YijinOptions): Item | number

    // 获取综卦
    getZhongGua(opt?: YijinOptions): Item | number

    // 获取复卦
    getFuGua(opt?: YijinOptions): Item | number

    // 获取杂卦
    getZaGua(opt?: YijinOptions): Item | number
}