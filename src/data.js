export const DATA = {
  id: 'dsh-constipation',
  name: '便秘',
  prefix: 'constipation',
  label: '便秘',
  defaultEeriness: 2,
  gain: 0.32,
  flareChance: 0.22,
  flareGain: 16,
  triggerWeight: 0.9,
  flareWeight: 0.85,
  reliefs: [
    { id: 'bigwater', label: '喝一大杯温水', relief: 14, minutes: 30, calm: 5 },
    { id: 'walk', label: '起来走两圈', relief: 18, minutes: 25, calm: 6 },
    { id: 'rub', label: '揉一揉肚子', relief: 12, minutes: 20, calm: 5 },
  ],
  body: {
    stiff: '肚子有点胀，坐着不如站着。',
    ache: '小腹发沉，坐久了得换个姿势；一整天都不太想吃东西。',
    flare: '胀得发硬，腰都直不利索；只能慢慢走两步，别的什么都不想干。',
  },
  voice: {
    base: '不提这件事；坐久了允许站起来走两圈（「我起来一下」），回来接原话题。',
    flare: '允许一次离席、允许说话变得很省；禁止拿这个开玩笑，禁止描述排泄。',
  },
}
