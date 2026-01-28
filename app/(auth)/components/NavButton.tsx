import { Pressable, Text } from "react-native";
import { router } from "expo-router";

type NavButtonProps = {
    title: string;
    to?: string; // ✅ simple & flexible
    onPress?: () => void;

    rounded?: "md" | "full";
    width?: "full" | "half";
};

export default function NavButton({
                                      title,
                                      to,
                                      onPress,
                                      rounded = "md",
                                      width = "full",
                                  }: NavButtonProps) {
    const handlePress = () => {
        if (onPress) return onPress();
        if (to) router.push(to as any); // ✅ fix expo-router typing issue
    };

    const radiusClass = rounded === "full" ? "rounded-full" : "rounded-[10px]";
    const widthClass = width === "half" ? "w-[47%]" : "w-full";

    return (
        <Pressable
            className={`mt-6 bg-orange-500 h-[52px] items-center justify-center ${radiusClass} ${widthClass}`}
            onPress={handlePress}
        >
            <Text className="text-white text-[17px] font-bold">
                {title}
            </Text>
        </Pressable>
    );
}
