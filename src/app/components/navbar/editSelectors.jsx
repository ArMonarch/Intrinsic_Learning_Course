import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAvatar from "./avatarStore";
import { SelectGroup } from "@radix-ui/react-select";

export function SelectHair() {
  const updateHair = useAvatar((state) => state.updateHair);
  return (
    <Select onValueChange={(value) => updateHair(value)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select Hair" className="text-sm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Bald">Bald</SelectItem>
          <SelectItem value="Afro">Afro</SelectItem>
          <SelectItem value="Bangs">Bangs Light</SelectItem>
          <SelectItem value="BangsFilled">Edna</SelectItem>
          <SelectItem value="HatHip">Hat</SelectItem>
          <SelectItem value="Mohawk">Mohawk</SelectItem>
          <SelectItem value="Beanie">Beanie</SelectItem>
          <SelectItem value="Hijab">Hijab</SelectItem>
          <SelectItem value="Bear">Bear</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectFace() {
  const updateFace = useAvatar((state) => state.updateFace);
  return (
    <Select onValueChange={(value) => updateFace(value)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select Face" className="text-sm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Smile">Smile</SelectItem>
          <SelectItem value="Blank">Blank</SelectItem>
          <SelectItem value="Serious">Serious</SelectItem>
          <SelectItem value="SmileTeeth">Nerd</SelectItem>
          <SelectItem value="Angry">Angry</SelectItem>
          <SelectItem value="Suspicious">Sus</SelectItem>
          <SelectItem value="Awe">Awe</SelectItem>
          <SelectItem value="LoveGrin">Heart Eyes</SelectItem>
          <SelectItem value="Cyclops">Cyclops</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectBody() {
  const updateBody = useAvatar((state) => state.updateBody);
  return (
    <Select onValueChange={(value) => updateBody(value)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select Body" className="text-sm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Shirt">Shirt</SelectItem>
          <SelectItem value="Dress">Dress</SelectItem>
          <SelectItem value="PointingUp">Nerd</SelectItem>
          <SelectItem value="Gaming">Gaming</SelectItem>
          <SelectItem value="Geek">Coding</SelectItem>
          <SelectItem value="Coffee">Coffee</SelectItem>
          <SelectItem value="Sweater">Sweater</SelectItem>
          <SelectItem value="Whatever">Whatever</SelectItem>
          <SelectItem value="Killer">Killer</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectAccessory() {
  const updateAccessory = useAvatar((state) => state.updateAccessory);
  return (
    <Select onValueChange={(value) => updateAccessory(value)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select Accessory" className="text-sm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="None">None</SelectItem>
          <SelectItem value="SunglassWayfarer">Shades</SelectItem>
          <SelectItem value="GlassRoundThick">Nerd</SelectItem>
          <SelectItem value="GlassAviator">Aviators</SelectItem>
          <SelectItem value="GlassButterflyOutline">Butterfly</SelectItem>
          <SelectItem value="Eyepatch">Eyepatch</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SelectFacialHair() {
  const updatefacialHair = useAvatar((state) => state.updateFacialHair);
  return (
    <Select onValueChange={(value) => updatefacialHair(value)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Select Facial Hair" className="text-sm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="None">None</SelectItem>
          <SelectItem value="Handlebars">Handle Bars</SelectItem>
          <SelectItem value="Chin">Chin</SelectItem>
          <SelectItem value="Goatee">Goatee</SelectItem>
          <SelectItem value="FullMedium">Full</SelectItem>
          <SelectItem value="FullMajestic">Majestic</SelectItem>
          <SelectItem value="MoustacheThin">Moustache</SelectItem>
          <SelectItem value="GrayFull">Old</SelectItem>
          <SelectItem value="MajesticHandlebars">Tycoon</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
