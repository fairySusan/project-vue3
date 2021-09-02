import { defineComponent, onMounted } from "vue";

const Notifacation = defineComponent({
  setup() {
    const getList = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(123)
        }, 1000)
      })
    }

    const getList2 = () => {
      return getList().then(res => {
        console.log('then', res)
      }).catch(() => {
        console.log('catch')
      })
    }

    onMounted(() => {
      getList2().then(() => {
        console.log('list2 then')
      }).catch(() => {
        console.log('list2 catch')
      })
    })
  }
})

export default Notifacation