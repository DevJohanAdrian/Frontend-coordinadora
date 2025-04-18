import { useSelector } from 'react-redux'
import { RootState } from '@/presentation/store/store'

export function useAuth() {
  return useSelector((state: RootState) => state.auth)
}