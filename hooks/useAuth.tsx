import { useState, useEffect, useMemo, useContext, createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../firebase'

function useAuth() {
    const [user, setUser] = useState(null)
  return user
}

export default useAuth