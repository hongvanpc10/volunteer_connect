import { cn } from '@/lib/utils'

export default function Crown({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 310.07'
			className={cn('fill-current w-5 text-amber-400', className)}
		>
			<path d='M512,84.41c0,8.84-7.16,16-16,16-2.84,0-5.5-.74-7.8-2.03-31.03,56.68-55.23,111.22-69.44,162.58-54.93-13.26-109.21-20.42-162.76-20.76-53.55.33-107.83,7.49-162.76,20.76-14.21-51.37-38.41-105.9-69.44-162.58-2.31,1.29-4.97,2.03-7.8,2.03-8.84,0-16-7.16-16-16s7.16-16,16-16,16,7.16,16,16c0,4.73-2.05,8.98-5.32,11.91,21.26,24.18,51.81,45.83,89.64,65.51,32.1,16.68,71.67,6.32,91.69-23.82,20.37-30.65,35.74-63.02,44.79-97.53-9.49-1.75-16.66-10.06-16.66-20.06C236.14,9.14,245.27,0,256.55,0s20.41,9.14,20.41,20.41c0,10.36-7.71,18.92-17.72,20.24,9.06,34.45,24.41,66.75,44.74,97.36,20.02,30.15,59.59,40.51,91.69,23.82,37.84-19.69,68.38-41.34,89.64-65.51-3.27-2.92-5.32-7.17-5.32-11.91,0-8.84,7.16-16,16-16s16,7.16,16,16Z' />
			<path d='M409.38,281.38l-5.91,28.69c-49.93-11.54-99.82-17.4-149.67-17.56-49.85.15-99.74,6.01-149.67,17.56l-5.91-28.69c52.93-13.18,104.81-20.02,155.59-20.39,50.78.38,102.65,7.22,155.59,20.39Z' />
		</svg>
	)
}
