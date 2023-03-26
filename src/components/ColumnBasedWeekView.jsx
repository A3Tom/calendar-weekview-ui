import DayTimeBlocks from "./DayTimeBlocks";
import calendarData from "../data/calendarData";

export default function ColumnBasedWeekView() {
	return (
		<div className="m-4">
			<div className="flex flex-row">
				{timeGutter()}
				{calendarData.map((dayBlock) => dayColumn(dayBlock))}
			</div>
		</div>
	);
}

function timeGutter() {
	const n = 11;
	return (
		<div className="border-r-2 border-dashed text-center shadow-md">
			<div className="py-8 border-b-2 border-dashed bg-gray-100 w-32">
				<div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
					<div className="text-xl font-bold font-mono max-h-8">Fuck you</div>
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
	<div className="box-border border-b-2 py-8 text-lg">
        <br />
	</div>
);
function dayColumn(dayBlock) {
	const n = 11;
	return (
		<div className="relative border-r-2 border-dashed border-gray-200 text-center w-40">
			<div className="py-8 border-b-2 border-dashed bg-gray-100 shadow-lg w-36">
				<div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
					<div className="text-xl font-bold font-mono">{dayBlock.dayName}</div>
				</div>
			</div>
            <DayTimeBlocks timeBlocks={dayBlock.dayBlocks} />
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
