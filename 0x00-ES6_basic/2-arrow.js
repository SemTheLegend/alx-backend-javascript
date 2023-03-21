export default () => {
	sanFransiscoNeighborHoods = ['SOMA', 'Union Square'];

	const self = this;
	this.addNeighborHood = (newNeighborhood) => {
		self.sanFransicoNeighborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
