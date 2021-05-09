// DOCS: https://github.com/xiaolin/react-image-gallery
import React from 'react'
import ImageGallery from 'react-image-gallery';
export function StockImagesCard() {
    const images = [
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_868243954mmp.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_868243954mmp.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_868243954u82.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_868243954u82.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_868243954oci.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_868243954oci.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_8682439540uk.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_8682439540uk.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_8682439549vf.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_8682439549vf.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_868243954e1z.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_868243954e1z.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_868243954gs1.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_868243954gs1.jpg',
        },
        {
            original: 'https://i0.shbdn.com/photos/24/39/54/x5_868243954ozf.jpg',
            thumbnail: 'https://i0.shbdn.com/photos/24/39/54/thmb_868243954ozf.jpg',
        },
    ];

    return <ImageGallery items={images} showNav={false} showPlayButton={false} autoPlay={true} slideInterval={5000}/>
}
