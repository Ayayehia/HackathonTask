interface TrackCardProps {
	number: number;
}

const TrackCard: React.FC<TrackCardProps> = ({ number }) => {
	return (
		<div
			className="flex flex-col justify-center items-start p-8 pb-10  rounded-2xl mt-12"
			style={{
				background:
					"linear-gradient(253deg, rgba(255, 122, 122, 0.56) 14.23%, #2A0FD3 101.22%)",
			}}
		>
			<div className="flex justify-between w-full text-2xl ">
				<h4 className="">AI Track</h4>
				<h4 className=""> {number} members</h4>
			</div>
			<div className="">
				<h2 className="">Team Number One</h2>
				<p className="text-xl">Team Code: TR3QZA13XX1</p>
			</div>
		</div>
	);
};

export default TrackCard;
