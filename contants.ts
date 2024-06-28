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
    "Failed" :"bg-red-600",
    "Stalled":"bg-red-600",
    "Archived":"bg-red-600",
    "Cancelled":"bg-yellow-500",
    "Scheduled":"bg-yellow-500",
    "Unarchiving":"bg-blue-700",
    "Downloading":"bg-blue-700",
    "Downloaded":"bg-green-800"
}
export const DEVICE_LIST_HEADER = [
    "Device Serial",
    "Location",
    "Bandwidth",
    "Status",
    "Download Status",
    "OS Version"
]

export const DEVICE_PAGE_TITLES=[
    "Details",
    "Content",
    "Bandwidth"
]
