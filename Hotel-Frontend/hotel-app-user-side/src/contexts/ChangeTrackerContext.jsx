"use client"

import { createContext } from "react"

export const ChangeTrackerContext = createContext({ changeTracker: "" ,flipChangeTracker: () => {}})