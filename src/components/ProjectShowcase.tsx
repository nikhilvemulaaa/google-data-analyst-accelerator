import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Database, 
  Code, 
  BarChart3, 
  TrendingUp, 
  Users,
  ShoppingCart,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const kpiData = [
    { label: "Total Revenue", value: "$2.4M", change: "+12.5%", positive: true, icon: DollarSign },
    { label: "Active Users", value: "45,230", change: "+8.3%", positive: true, icon: Users },
    { label: "Conversion Rate", value: "3.2%", change: "+0.5%", positive: true, icon: TrendingUp },
    { label: "Cart Abandonment", value: "68%", change: "-4.2%", positive: true, icon: ShoppingCart },
  ];

  const sqlQueries = [
    {
      title: "Customer Lifetime Value Analysis",
      query: `SELECT 
  customer_id,
  ROUND(SUM(order_total), 2) as total_revenue,
  COUNT(DISTINCT order_id) as total_orders,
  ROUND(AVG(order_total), 2) as avg_order_value,
  DATEDIFF(MAX(order_date), MIN(order_date)) as customer_lifespan
FROM orders
WHERE order_status = 'completed'
GROUP BY customer_id
HAVING total_orders >= 2
ORDER BY total_revenue DESC
LIMIT 100;`,
    },
    {
      title: "Funnel Drop-off Analysis",
      query: `WITH funnel AS (
  SELECT 
    session_id,
    MAX(CASE WHEN event = 'page_view' THEN 1 ELSE 0 END) as viewed,
    MAX(CASE WHEN event = 'add_to_cart' THEN 1 ELSE 0 END) as added,
    MAX(CASE WHEN event = 'checkout_start' THEN 1 ELSE 0 END) as checkout,
    MAX(CASE WHEN event = 'purchase' THEN 1 ELSE 0 END) as purchased
  FROM user_events
  WHERE event_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY)
  GROUP BY session_id
)
SELECT 
  SUM(viewed) as total_views,
  SUM(added) as cart_additions,
  SUM(checkout) as checkout_started,
  SUM(purchased) as completed_purchases,
  ROUND(SUM(purchased) / SUM(viewed) * 100, 2) as conversion_rate
FROM funnel;`,
    },
  ];

  const pythonCode = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans

# Load and clean data
df = pd.read_csv('ecommerce_behavior.csv')
df['event_time'] = pd.to_datetime(df['event_time'])
df = df.dropna(subset=['user_id', 'product_id'])

# Feature Engineering for RFM Analysis
rfm = df.groupby('user_id').agg({
    'event_time': lambda x: (df['event_time'].max() - x.max()).days,  # Recency
    'session_id': 'nunique',  # Frequency
    'price': 'sum'  # Monetary
}).rename(columns={
    'event_time': 'Recency',
    'session_id': 'Frequency',
    'price': 'Monetary'
})

# Customer Segmentation using K-Means
scaler = StandardScaler()
rfm_scaled = scaler.fit_transform(rfm)
kmeans = KMeans(n_clusters=4, random_state=42)
rfm['Segment'] = kmeans.fit_predict(rfm_scaled)

# Segment Labels
segment_map = {0: 'Champions', 1: 'Loyal', 2: 'At Risk', 3: 'Lost'}
rfm['Segment_Label'] = rfm['Segment'].map(segment_map)

print(rfm['Segment_Label'].value_counts())`;

  const insights = [
    {
      title: "Mobile Traffic Underperforms",
      description: "Mobile users account for 62% of traffic but only 28% of conversions. Mobile checkout has 3x higher abandonment rate.",
      action: "Implement mobile-first checkout redesign with Apple Pay/Google Pay integration",
      impact: "Projected +$180K monthly revenue",
    },
    {
      title: "Evening Peak Opportunity",
      description: "User engagement peaks between 7-9 PM but promotional emails are sent at 10 AM.",
      action: "Shift email campaigns to 6 PM and implement personalized push notifications",
      impact: "Expected +15% email conversion rate",
    },
    {
      title: "High-Value Customer Retention",
      description: "Top 10% customers generate 45% of revenue but 23% haven't purchased in 60+ days.",
      action: "Launch VIP loyalty program with exclusive early access and personalized offers",
      impact: "Reduce churn by 18%, retain $420K annually",
    },
  ];

  return (
    <section id="project" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Featured Project</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            E-Commerce User Behavior Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive analysis of 500K+ user sessions to optimize conversion funnels, 
            reduce cart abandonment, and increase customer lifetime value.
          </p>
        </div>

        {/* KPI Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {kpiData.map((kpi, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <kpi.icon className="h-5 w-5 text-muted-foreground" />
                  <span className={`text-sm flex items-center gap-1 ${kpi.positive ? 'text-green-600' : 'text-red-500'}`}>
                    {kpi.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {kpi.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Data</span>
            </TabsTrigger>
            <TabsTrigger value="sql" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">SQL</span>
            </TabsTrigger>
            <TabsTrigger value="python" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Python</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Insights</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Problem Statement</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    An e-commerce platform experienced a 15% decline in conversion rates 
                    over Q3 2024 despite increasing traffic. The business needed to 
                    understand user behavior patterns and identify optimization opportunities.
                  </p>
                  <div className="space-y-2">
                    <div className="font-medium text-foreground">Key Questions:</div>
                    <ul className="space-y-1 text-sm">
                      <li>• Where are users dropping off in the purchase funnel?</li>
                      <li>• Which user segments have the highest lifetime value?</li>
                      <li>• What factors influence cart abandonment?</li>
                      <li>• How can we improve mobile conversion rates?</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Methodology (STAR Format)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium text-foreground text-sm">Situation</div>
                    <p className="text-muted-foreground text-sm">
                      E-commerce platform with 500K+ monthly sessions facing declining conversions
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Task</div>
                    <p className="text-muted-foreground text-sm">
                      Analyze user behavior data to identify conversion blockers and growth opportunities
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Action</div>
                    <p className="text-muted-foreground text-sm">
                      Built ETL pipeline, performed funnel analysis, customer segmentation, and A/B test analysis
                    </p>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Result</div>
                    <p className="text-muted-foreground text-sm">
                      Identified $600K+ revenue opportunities, reduced cart abandonment by 12%
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Data Tab */}
          <TabsContent value="data">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Dataset Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-medium text-foreground">Field</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Description</th>
                        <th className="text-left py-3 px-4 font-medium text-foreground">Sample</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">user_id</td>
                        <td className="py-3 px-4">VARCHAR</td>
                        <td className="py-3 px-4">Unique user identifier</td>
                        <td className="py-3 px-4 font-mono text-xs">usr_a1b2c3d4</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">session_id</td>
                        <td className="py-3 px-4">VARCHAR</td>
                        <td className="py-3 px-4">Session identifier</td>
                        <td className="py-3 px-4 font-mono text-xs">sess_x7y8z9</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">event_type</td>
                        <td className="py-3 px-4">ENUM</td>
                        <td className="py-3 px-4">User action type</td>
                        <td className="py-3 px-4 font-mono text-xs">add_to_cart</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">product_id</td>
                        <td className="py-3 px-4">VARCHAR</td>
                        <td className="py-3 px-4">Product SKU</td>
                        <td className="py-3 px-4 font-mono text-xs">prod_12345</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">category</td>
                        <td className="py-3 px-4">VARCHAR</td>
                        <td className="py-3 px-4">Product category</td>
                        <td className="py-3 px-4 font-mono text-xs">electronics</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">price</td>
                        <td className="py-3 px-4">DECIMAL</td>
                        <td className="py-3 px-4">Product price USD</td>
                        <td className="py-3 px-4 font-mono text-xs">149.99</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-xs">device_type</td>
                        <td className="py-3 px-4">ENUM</td>
                        <td className="py-3 px-4">User device</td>
                        <td className="py-3 px-4 font-mono text-xs">mobile</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-xs">event_time</td>
                        <td className="py-3 px-4">TIMESTAMP</td>
                        <td className="py-3 px-4">Event timestamp</td>
                        <td className="py-3 px-4 font-mono text-xs">2024-10-15 14:32:01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-background border border-border">
                    <div className="text-2xl font-bold text-foreground">523,847</div>
                    <div className="text-sm text-muted-foreground">Total Records</div>
                  </div>
                  <div className="p-4 bg-background border border-border">
                    <div className="text-2xl font-bold text-foreground">45,230</div>
                    <div className="text-sm text-muted-foreground">Unique Users</div>
                  </div>
                  <div className="p-4 bg-background border border-border">
                    <div className="text-2xl font-bold text-foreground">90 Days</div>
                    <div className="text-sm text-muted-foreground">Date Range</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SQL Tab */}
          <TabsContent value="sql" className="space-y-6">
            {sqlQueries.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-foreground/5 p-4 overflow-x-auto text-sm font-mono text-foreground">
                    <code>{item.query}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Python Tab */}
          <TabsContent value="python">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Customer Segmentation (RFM + K-Means)</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-foreground/5 p-4 overflow-x-auto text-sm font-mono text-foreground">
                  <code>{pythonCode}</code>
                </pre>
                <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-background border border-border text-center">
                    <div className="text-xl font-bold text-foreground">Champions</div>
                    <div className="text-sm text-muted-foreground">8,234 users</div>
                    <div className="text-xs text-green-600">High Value</div>
                  </div>
                  <div className="p-4 bg-background border border-border text-center">
                    <div className="text-xl font-bold text-foreground">Loyal</div>
                    <div className="text-sm text-muted-foreground">12,456 users</div>
                    <div className="text-xs text-blue-600">Consistent</div>
                  </div>
                  <div className="p-4 bg-background border border-border text-center">
                    <div className="text-xl font-bold text-foreground">At Risk</div>
                    <div className="text-sm text-muted-foreground">15,890 users</div>
                    <div className="text-xs text-yellow-600">Needs Attention</div>
                  </div>
                  <div className="p-4 bg-background border border-border text-center">
                    <div className="text-xl font-bold text-foreground">Lost</div>
                    <div className="text-sm text-muted-foreground">8,650 users</div>
                    <div className="text-xs text-red-500">Churned</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{insight.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-background p-3 border border-border">
                          <div className="text-xs font-medium text-muted-foreground uppercase mb-1">Recommendation</div>
                          <div className="text-sm text-foreground">{insight.action}</div>
                        </div>
                        <div className="bg-primary/5 p-3 border border-primary/20">
                          <div className="text-xs font-medium text-primary uppercase mb-1">Projected Impact</div>
                          <div className="text-sm font-medium text-foreground">{insight.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectShowcase;
