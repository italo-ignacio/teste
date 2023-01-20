import { DependencyList, useCallback, useEffect } from 'react'

const useDebounce = (effect: () => void, dependencies: DependencyList, delay: number): void => {
  const callback = useCallback(effect, dependencies)

  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    return (): void => clearTimeout(timeout)
  }, [callback, delay])
}

export default useDebounce
