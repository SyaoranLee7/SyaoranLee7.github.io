
/**
 * 用法
 * let data = this.$enum.getDescByValue("SOURCE_IN_TYPE", 1);
 * let sourceTypeList =this.$enum.getValueDescList('SOURCE_IN_TYPE')   //获取定时
 * 
 */
const EnumInfo = {
    LOIGN_TYPE: {
        PURCHASE_IN: {
            value: 1,
            desc: '采购入库'
        },
        REFUND_IN: {
            value: 2,
            desc: '退货入库'
        },
        CHECK_IN: {
            value: 3,
            desc: '盘点入库'
        },
        CONFIRM_IN: {
            value: 4,
            desc: '取消订单入库'
        }
    }
}

export default EnumInfo


