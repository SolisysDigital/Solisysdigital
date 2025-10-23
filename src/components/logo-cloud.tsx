import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <div className="flex items-center justify-center h-9 max-sm:mx-auto sm:h-8 lg:h-12 px-4 py-2 bg-gray-100 rounded-lg">
        <span className="text-sm font-semibold text-gray-700">Salesforce</span>
      </div>
      <div className="flex items-center justify-center h-9 max-sm:mx-auto sm:h-8 lg:h-12 px-4 py-2 bg-gray-100 rounded-lg">
        <span className="text-sm font-semibold text-gray-700">FSC</span>
      </div>
      <div className="flex items-center justify-center h-9 max-sm:mx-auto sm:h-8 lg:h-12 px-4 py-2 bg-gray-100 rounded-lg">
        <span className="text-sm font-semibold text-gray-700">Experience Cloud</span>
      </div>
      <div className="flex items-center justify-center h-9 max-sm:mx-auto sm:h-8 lg:h-12 px-4 py-2 bg-gray-100 rounded-lg">
        <span className="text-sm font-semibold text-gray-700">Marketing Cloud</span>
      </div>
      <div className="flex items-center justify-center h-9 max-sm:mx-auto sm:h-8 lg:h-12 px-4 py-2 bg-gray-100 rounded-lg">
        <span className="text-sm font-semibold text-gray-700">Data Cloud</span>
      </div>
    </div>
  )
}
