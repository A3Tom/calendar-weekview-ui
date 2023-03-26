export default function ColumnBasedWeekView() {
	return (
		<div className="m-4">
			<div className="grid grid-cols-8">
				{timeGutter()}
				{dayColumn("Montag")}
				{dayColumn("Dienstag")}
				{dayColumn("Mittwoch")}
				{dayColumn("Donnerstag")}
				{dayColumn("Freitag")}
				{dayColumn("Samstag")}
				{dayColumn("Sonntag")}
			</div>
		</div>
	);
}

function timeGutter() {
	const n = 11;
	return (
		<div className="border-r-2 border-dashed text-center">
			<div className="py-8 border-b-2 border-dashed bg-gray-100">
				<div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
					<div className="text-2xl font-bold font-mono">Fuck you</div>
				</div>
			</div>
			{[...Array(n)].map((e, i) => timeGutterTimeDelimiter(buildTimeString(i)))}
		</div>
	);
}

function buildTimeString(arrIdx) {
	return (arrIdx * 100 + 700).toString().padStart(4, "0");
}

const blankBoxSpaced = (
	<div className="box-border border-b-2 py-8">
		<div className="text-lg opacity-0">.</div>
	</div>
);
function dayColumn(dayName) {
	const n = 11;
	return (
		<div className="border-r-2 border-dashed border-gray-200 text-center">
			<div className="py-8 border-b-2 border-dashed bg-gray-100 shadow-lg">
				<div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
					<div className="text-2xl font-bold font-mono">{dayName}</div>
				</div>
			</div>
			{[...Array(n)].map((e, i) => blankBoxSpaced)}
		</div>
	);
}

function timeGutterTimeDelimiter(time) {
	return (
		<div className="box-border border-b-2 py-8 bg-gray-100">
			<div className="text-lg text-blue-600 font-semibold">{time}</div>
		</div>
	);
}
