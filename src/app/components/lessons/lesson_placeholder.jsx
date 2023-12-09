import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Lock } from "lucide-react";

export function LessonPlaceholder(props) {
  return (
    <Card className=" border-8 border-border w-1/3 mx-auto mt-5">
      <CardHeader>
        <CardTitle className="text-center font-bold tracking-wide">
          {props.title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
