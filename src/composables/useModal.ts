import { ref } from 'vue'

export function useModal () {
  const opened = ref(false)

  const open = () => {
    opened.value = true
  }
  const close = () => {
    opened.value = false
  }

  return {
    opened,
    open,
    close,
  }
}
