export const STATUS = [
    "Failed",
    "Cancelled",
    "Scheduled",
    "Downloading",
    "Downloaded"
]

export const STATUS_COLOR:{[key: string] : string} = {
    "Failed" :"red",
    "Cancelled":"yellow",
    "Scheduled":"gray",
    "Downloading":"#0080FF",
    "Downloaded":"green"
}

export const DOWNLOAD_STATUS:{[key:string]:string}={
    "failed":"red",
    "downloading":"#0080FF",
    "cancelled":"yellow",
    "succeeded":"green"
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
