import {Image} from 'expo-image';

export default function UserFeatureImage({imageUrl}: {imageUrl: string}) {
    return (
        
        <Image source={imageUrl} style={{ width: "100%", height: "43%", borderRadius: 20
         }} contentFit="cover" />
    )
}