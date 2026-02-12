import { defaultHeartImages } from './script';

export const heartImages = [
    ...(window.dataCCD ? .data ? .heartImages || []),
    ...defaultHeartImages,
];