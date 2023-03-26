import React from 'react'

export default function DayTimeBlocks({timeBlocks}) {
    let blockHeightPx = 94;
    return (
        <div>
        {timeBlocks.map((block) => {
            switch (block.blockType) {
				case 1:
					return coreHourBlock(blockHeightPx, block);
				case 2:
					return breakHourBlock(blockHeightPx, block);
				case 3:
					return workingHourBlock(blockHeightPx, block);
				default:
					return coreHourBlock(blockHeightPx, block);
			}
        })}
        </div>
	);
}

function coreHourBlock(blockHeightPx, block) {
	return (
		<div className="absolute w-full px-2" style={{ top: `${blockHeightPx * (block.startHrs + 1)}px` }}>
			<div className="bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-xl text-3xl shadow-md overflow-hidden hover:ring-emerald-300 hover:ring-offset-2 hover:ring-2">
				<div style={{ height: `${blockHeightPx * block.duration}px` }}>
					<div className="text-sm font-semibold text-white pt-0 break-all bg-clip-text">{block.title}</div>
				</div>
			</div>
		</div>
	);
}

function breakHourBlock(blockHeightPx, block) {
	return (
		<div className="absolute w-full px-2" style={{ top: `${blockHeightPx * (block.startHrs + 1)}px` }}>
			<div className="bg-gradient-to-b from-fuchsia-500 to-pink-500 rounded-xl text-3xl shadow-md overflow-hidden hover:ring-fuchsia-400 hover:ring-offset-2 hover:ring-2">
				<div style={{ height: `${blockHeightPx * block.duration}px` }}>
					<div className="text-sm font-semibold text-white pt-0 break-all bg-clip-text">{block.title}</div>
				</div>
			</div>
		</div>
	);
}

function workingHourBlock(blockHeightPx, block) {
	return (
		<div className="absolute w-full px-2" style={{ top: `${blockHeightPx * (block.startHrs + 1)}px` }}>
			<div className="bg-gradient-to-b from-violet-600 to-blue-600 rounded-xl text-3xl shadow-md overflow-hidden hover:ring-violet-500 hover:ring-offset-2 hover:ring-2">
				<div style={{ height: `${blockHeightPx * block.duration}px` }}>
					<div className="text-sm font-semibold text-white pt-0 break-all bg-clip-text">{block.title}</div>
				</div>
			</div>
		</div>
	);
}
