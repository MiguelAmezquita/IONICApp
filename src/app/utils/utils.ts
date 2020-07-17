export function getUrlImage(url: string, cache: boolean = false) {
    return cache ? url : url + "?" + new Date().getTime();
}