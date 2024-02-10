export const useAppState = () => {
    return useState<{
        locale: String;
    }>('appState',
        () => ({
            locale: "en",
        })
    );
}