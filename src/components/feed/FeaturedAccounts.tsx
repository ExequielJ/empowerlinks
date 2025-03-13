
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Check, Award } from 'lucide-react';

const FeaturedAccounts = () => {
  const featuredAccounts = [
    {
      id: 1,
      name: 'Tech Women Global',
      role: 'Organization',
      avatar: 'https://i.pravatar.cc/150?img=25',
      isVerified: true,
      followers: 25600
    },
    {
      id: 2,
      name: 'Maria Johnson',
      role: 'CEO at FemTech Solutions',
      avatar: 'https://i.pravatar.cc/150?img=31',
      isVerified: true,
      followers: 18300
    },
    {
      id: 3,
      name: 'Women in STEM Initiative',
      role: 'Non-profit Organization',
      avatar: 'https://i.pravatar.cc/150?img=27',
      isVerified: true,
      followers: 15900
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center">
          <Award className="h-4 w-4 mr-2 text-primary" />
          Featured Accounts
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3">
          {featuredAccounts.map((account) => (
            <li key={account.id} className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={account.avatar} 
                    alt={account.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {account.isVerified && (
                  <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-[2px]">
                    <Check className="h-3 w-3" />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex items-center">
                  <h4 className="font-medium text-sm">{account.name}</h4>
                  {account.isVerified && (
                    <Check className="h-3 w-3 text-primary ml-1" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{account.role}</p>
                <p className="text-xs text-muted-foreground">
                  {new Intl.NumberFormat('en', { notation: 'compact' }).format(account.followers)} followers
                </p>
              </div>
              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                <UserPlus className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
        <Button variant="link" size="sm" className="mt-2 w-full">
          Discover more
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedAccounts;
