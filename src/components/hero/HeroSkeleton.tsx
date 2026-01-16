
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSkeleton = () => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-cream to-neutral-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div className="text-left">
          <Skeleton className="h-16 w-3/4 mb-6 bg-primary/10" />
          <Skeleton className="h-20 w-full mb-8 bg-primary/10" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32 bg-primary/10" />
            <Skeleton className="h-12 w-40 bg-primary/10" />
          </div>
        </div>
        <div className="hidden lg:block">
          <Skeleton className="h-80 w-full rounded-2xl bg-primary/10" />
        </div>
      </div>
      
      {/* Bento Grid Skeleton - Updated to match new layout (one row only) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Skeleton className="h-48 rounded-xl bg-primary/10" />
        <Skeleton className="h-48 rounded-xl bg-primary/10" />
        <Skeleton className="h-48 rounded-xl bg-primary/10" />
      </div>
      
      {/* Compliance Badge Skeleton */}
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-12 rounded-lg bg-primary/10" />
          <Skeleton className="h-12 rounded-lg bg-primary/10" />
          <Skeleton className="h-12 rounded-lg bg-primary/10" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSkeleton;
