
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Hash } from 'lucide-react';

const TrendingTopics = () => {
  const trendingTopics = [
    {
      id: 1,
      tag: 'WomenInTech',
      count: 1253,
      trending: true
    },
    {
      id: 2,
      tag: 'LeadershipSkills',
      count: 895,
      trending: true
    },
    {
      id: 3,
      tag: 'RemoteWork',
      count: 754,
      trending: false
    },
    {
      id: 4,
      tag: 'TechEquality',
      count: 687,
      trending: true
    },
    {
      id: 5,
      tag: 'Entrepreneurship',
      count: 621,
      trending: false
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {trendingTopics.map((topic) => (
            <li key={topic.id}>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start p-2 h-auto"
              >
                <Hash className="h-4 w-4 mr-2 text-primary" />
                <div className="text-left">
                  <div className="font-medium text-sm">#{topic.tag}</div>
                  <div className="text-xs text-muted-foreground">
                    {topic.count} posts
                    {topic.trending && (
                      <span className="ml-2 text-primary">
                        <TrendingUp className="h-3 w-3 inline-block" /> Trending
                      </span>
                    )}
                  </div>
                </div>
              </Button>
            </li>
          ))}
        </ul>
        <Button variant="link" size="sm" className="mt-2 w-full">
          See more topics
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;
