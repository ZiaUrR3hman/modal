import { useGlobalContext } from './context';

const Home = () => {
	const { openModal } = useGlobalContext();
	return (
		<>
			<div className="container mx-auto bg-white shadow-lg">
				<div className="flex items-center justify-center h-screen ">
					<button
						onClick={openModal}
						className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500 px-4 py-2 text-white font-semibold text-md tracking-wider uppercase rounded-md"
					>
						Deactivate
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
