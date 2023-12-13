type CountryPageProps = {
	params: {
		country: string;
	};
};

export default function CountryPage({ params }: CountryPageProps) {
	return <main>My Post: {params.country}</main>;
}
