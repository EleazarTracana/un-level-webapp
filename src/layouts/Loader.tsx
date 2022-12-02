import { ImSpinner2 as Spinner } from 'react-icons/im'

export default function Loader() {
	return (
		<div className='w-screen h-screen grid place-items-center'>
			<Spinner className='text-4xl animate-spin' />
		</div>
	)
}
