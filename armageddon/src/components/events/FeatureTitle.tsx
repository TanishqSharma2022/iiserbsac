
"use client"
import { useFeatureStore } from '@/app/events/store';
import { cn } from '@/utils/cn';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function FeatureTitle({children, id}: {children : React.ReactNode, id: string},) {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin:"-50% 0px -50% 0px"})

    const setInViewFeature = useFeatureStore(state => state.setInViewFeature)

    useEffect(() => {
        if(isInView) setInViewFeature(id)

    }, [isInView, id, setInViewFeature])

  return (
    <div>
        <p ref={ref} className={cn('py-16 font-heading text-5xl transition-colors', isInView ? "text-gray-100" : "text-gray-800")}>{children}</p>
    </div>
  )
}

export default FeatureTitle