export const STATUS = [
    "Failed",
    "Stalled",
    "Archived",
    "Cancelled",
    "Scheduled",
    "Unarchiving",
    "Downloading",
    "Downloaded"
]

export const STATUS_COLOR:{[key: string] : string} = {
    "Failed" :"red",
    "Stalled":"red",
    "Archived":"red",
    "Cancelled":"yellow",
    "Scheduled":"yellow",
    "Unarchiving":"blue",
    "Downloading":"blue",
    "Downloaded":"green"
}
export const DEVICE_LIST_HEADER = [
    "Device Serial",
    "Location",
    "Bandwidth",
    "Status",
    "Download Status",
    "OS Version"
]