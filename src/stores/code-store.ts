function get(path: string)
{
    const baseUrl = import.meta.env.VITE_GIT_TEMPLATES_URL;
    return baseUrl + path;
}

export const useCodeStore = {
    get
}
