import { ShoppingCart, Clock, BarChart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import type { Seminar } from '../App';

interface SeminarCardProps {
  seminar: Seminar;
  onAddToCart: (id: string) => void;
  isInCart: boolean;
}

export function SeminarCard({ seminar, onAddToCart, isInCart }: SeminarCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow border-gray-200">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl text-[#0C4A6E]">{seminar.title}</h3>
          <Badge className={getLevelColor(seminar.level)} variant="outline">
            {seminar.level}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{seminar.duration}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-gray-600 leading-relaxed">{seminar.description}</p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <div className="text-2xl text-[#0C4A6E]">
          ${seminar.price}
        </div>
        <Button
          onClick={() => onAddToCart(seminar.id)}
          className="bg-[#DC2626] hover:bg-[#B91C1C] text-white"
          disabled={isInCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
