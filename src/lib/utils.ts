import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resizeTextarea(this: HTMLTextAreaElement) {
  this.style.height = 'auto'
  this.style.height = `${this.scrollHeight}px`
}

export const errorUtils = {
  getError: (error: any) => {
    let e = error
    if (error.response) {
      e = error.response.data
      if (error.response.data && error.response.data.error) {
        e = error.response.data.error
      }
    } else if (error.message) {
      e = error.message
    } else {
      e = 'Unknown error occured'
    }
    return e
  },
}
