import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">عني</h2>
            <p className="text-xl text-muted-foreground">
              مطور برمجيات شغوف بالتكنولوجيا والابتكار
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                أنا مطور برمجيات محترف مع خبرة واسعة في تطوير الأنظمة والتطبيقات الحديثة.
                أتخصص في بناء حلول برمجية متكاملة تلبي احتياجات العملاء وتحقق أهدافهم التجارية.
              </p>
              
              <p className="text-lg leading-relaxed">
                أمتلك خبرة عميقة في تطوير الواجهات الأمامية باستخدام React و Next.js، وتطوير
                الخوادم باستخدام Node.js و Python. كما أتقن العمل مع قواعد البيانات المختلفة
                وأدوات التطوير الحديثة.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl">💻</div>
                  <h3 className="font-semibold">تطوير الويب</h3>
                  <p className="text-sm text-muted-foreground">
                    تطبيقات ويب حديثة ومتجاوبة
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">⚙️</div>
                  <h3 className="font-semibold">بناء الأنظمة</h3>
                  <p className="text-sm text-muted-foreground">
                    أنظمة متكاملة وقابلة للتوسع
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl">🎨</div>
                  <h3 className="font-semibold">تصميم الواجهات</h3>
                  <p className="text-sm text-muted-foreground">
                    واجهات مستخدم جذابة وسهلة
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
