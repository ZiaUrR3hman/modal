import { useState } from 'react';

const Home = () => {
	return (
		<>
			<div className="container mx-auto bg-white shadow-lg">
				<div className="flex items-center justify-center h-screen ">
					<button
						onClick={() => {
							setOpenModal(true);
						}}
						className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-offset-2 px-4 py-2 text-white font-semibold text-lg tracking-wider uppercase rounded-sm"
					>
						Deactivate
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
