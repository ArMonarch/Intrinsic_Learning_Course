import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader } from "@/components/ui/card";
import { CardContent } from "../ui/card";

const achievements = Array.from({ length: 50 }).map(
  (_, i, a) => `achievement.${a.length - i}`
);

export function AchievementScroll() {
  return (
    <ScrollArea className="h-72 w-auto rounded-md border-4">
      <div className="p-4">
        <h4 className="mb-4 text-md font-medium leading-none text-center">
          Achievements
        </h4>
        {achievements.map((tag) => (
          <>
            <Card key={tag} className="text-sm border-2">
              <CardHeader className="p-3">{tag}</CardHeader>
              <CardContent className="bg-secondary p-2 rounded-b-lg">
                ur mum gay
              </CardContent>
            </Card>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
